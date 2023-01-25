/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { EuiFlyoutHeader, EuiTab, EuiTabs } from '@elastic/eui';
import React from 'react';
import { css } from '@emotion/react';
import type { VisualizePanelPaths } from '../panel-model';
import { tabs } from './tabs';

export const VisualizeHeader = React.memo(
  ({
    selectedTabId,
    setSelectedTabId,
    handleOnEventClosed,
  }: {
    selectedTabId: VisualizePanelPaths;
    setSelectedTabId: (selected: VisualizePanelPaths) => void;
    handleOnEventClosed?: () => void;
  }) => {
    const onSelectedTabChanged = (id: VisualizePanelPaths) => setSelectedTabId(id);
    const renderTabs = tabs.map((tab, index) => (
      <EuiTab
        onClick={() => onSelectedTabChanged(tab.id)}
        isSelected={tab.id === selectedTabId}
        key={index}
      >
        {tab.name}
      </EuiTab>
    ));

    return (
      <EuiFlyoutHeader hasBorder>
        <EuiTabs
          size="l"
          expand
          css={css`
            margin-bottom: -25px;
          `}
        >
          {renderTabs}
        </EuiTabs>
      </EuiFlyoutHeader>
    );
  }
);

VisualizeHeader.displayName = 'EventHeader';
