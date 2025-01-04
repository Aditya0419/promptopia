'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { Suspense } from 'react'

import Form from "@/components/Form"

const EditPrompt = () => {
    const router = useRouter();
    const [searchParams, setSearchParams] = useState(null);  // Store search params here
    const [promptId, setPromptId] = useState(null);
    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({ prompt: "", tag: "" });

    // Set searchParams and promptId after mount (client-side)
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);  // Using the window object directly
        setSearchParams(params);
        setPromptId(params.get('id'));
    }, []); // Empty dependency array ensures this runs only once on mount

    useEffect(() => {
        if (promptId) {
            const getpromptDetails = async () => {
                const res = await fetch(`/api/prompt/${promptId}`);
                const data = await res.json();

                setPost({
                    prompt: data.prompt,
                    tag: data.tag
                })
            }

            getpromptDetails();
        }
    }, [promptId]);

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
            });

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
        // Wrapping the form in Suspense is still a good practice for client-side behavior
        <Suspense fallback={<div>Loading...</div>}>
            {searchParams && promptId ? (
                <Form
                    type='Edit'
                    post={post}
                    setPost={setPost}
                    submitting={submitting}
                    handleSubmit={updatePrompt}
                />
            ) : (
                <div>Loading...</div>
            )}
        </Suspense>
    );
}

export default EditPrompt;
