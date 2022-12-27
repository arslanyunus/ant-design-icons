// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorMobbileBulkSvg from '@ant-design/icons-svg/lib/asn/MonitorMobbileBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorMobbileBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorMobbileBulk: MonitorMobbileBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorMobbileBulkSvg}></AntdIcon>;
};

MonitorMobbileBulk.displayName = 'MonitorMobbileBulk';
MonitorMobbileBulk.inheritAttrs = false;
export default MonitorMobbileBulk;