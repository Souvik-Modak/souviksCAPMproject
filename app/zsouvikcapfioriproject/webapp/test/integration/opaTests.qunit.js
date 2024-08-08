sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zsouvikcapfioriproject/test/integration/FirstJourney',
		'zsouvikcapfioriproject/test/integration/pages/RisksList',
		'zsouvikcapfioriproject/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zsouvikcapfioriproject') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);