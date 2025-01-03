'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { Suspense } from 'react'

import Form from "@/components/Form"

const EditPrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');
    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({ prompt: "", tag: "" });

    useEffect(() => {
        const getpromptDetails = async () => {
            const res = await fetch(`/api/prompt/${promptId}`)
            const data = await res.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag
            })
        }

        if (promptId) getpromptDetails();

    }, [promptId])

    const updatePrompt = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!promptId) return alert('PromptID not found');

        try {
            const res = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            })

            if (res.ok) {
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Suspense>
            <Form
                type='Edit'
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={updatePrompt}
            />
        </Suspense>

    );
}

export default EditPrompt;