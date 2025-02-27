const LangKeys = [
    'context-menu/labels/copy',
    'context-menu/labels/copyImage',
    'context-menu/labels/copyImageAddress',
    'context-menu/labels/copyLink',
    'context-menu/labels/copyVideoAddress',
    'context-menu/labels/cut',
    'context-menu/labels/inspect',
    'context-menu/labels/learnSpelling',
    'context-menu/labels/lookUpSelection',
    'context-menu/labels/paste',
    'context-menu/labels/saveImage',
    'context-menu/labels/saveImageAs',
    'context-menu/labels/saveLinkAs',
    'context-menu/labels/saveVideo',
    'context-menu/labels/saveVideoAs',
    'context-menu/labels/searchWithGoogle',
    'context-menu/labels/selectAll',
    'context-menu/labels/services',

    'system/settings/lang',
    'system/settings/theme',
    'system/update-available/title',
    'system/update-available/description',
    'system/git-install/title',
    'system/git-install/description',
    'system/git-install/button',
    'system/git-install-finish/title',
    'system/git-install-finish/description',
    'system/git-install-error/title',
    'system/git-install-error/description',

    'general/app/description',
    'general/app/repository',
    'general/app/report',

    'galley/config/paths',
    'galley/config/apply',
    'galley/open-folder/button',
    'galley/search/title',
    'galley/search/prompt',
    'galley/search/model',
    'galley/search/button',

    'webui/launcher/install-success/title',
    'webui/launcher/install-success/description',
    'webui/launcher/launched/title',
    'webui/launcher/not-installed/title',
    'webui/launcher/not-installed/description',
    'webui/launcher/not-installed/button',
    'webui/launcher/not-running/title',
    'webui/launcher/uninstall-env/button',
    'webui/launcher/uninstall-env/title',
    'webui/launcher/uninstall-env/description',
    'webui/launcher/uninstall/button',
    'webui/launcher/open-folder/button',

    'webui/launcher/config/commit',
    'webui/launcher/config/update',

    'webui/config/ckpt-dir',
    'webui/config/vae-dir',
    'webui/config/embeddings-dir',
    'webui/config/hypernetwork-dir',
    'webui/config/xformers',
    'webui/config/custom',
] as const
export type LangKeys = (typeof LangKeys)[number]
export type LangConfig = Record<LangKeys, string>
