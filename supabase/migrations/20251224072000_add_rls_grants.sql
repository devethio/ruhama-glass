-- Ensure API roles can access tables according to RLS policies
GRANT USAGE ON SCHEMA public TO anon, authenticated;

GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;

GRANT INSERT ON public.newsletter_subscribers TO anon, authenticated;

GRANT SELECT, INSERT ON public.quote_requests TO authenticated;
GRANT INSERT ON public.quote_requests TO anon;

GRANT SELECT, INSERT, DELETE ON public.favorites TO authenticated;

GRANT SELECT ON public.blog_posts TO anon, authenticated;

GRANT SELECT, UPDATE ON public.notifications TO authenticated;
