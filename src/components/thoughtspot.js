import { init, AuthType } from '@thoughtspot/visual-embed-sdk';
//import { SearchEmbed } from '@thoughtspot/visual-embed-sdk/react';

init({
    thoughtSpotHost: 'https://embed-1-do-not-delete.thoughtspotdev.cloud',
    authType: AuthType.None,
});

const ThoughtSpot = ({ dataSources }) => {
    
    
    return <div>Hello ThoughtSpot</div>
    //return <SearchEmbed className="ts-container" dataSources={dataSources} onCustomAction={onCustomAction} />
}

export default ThoughtSpot;