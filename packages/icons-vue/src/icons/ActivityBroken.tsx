// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ActivityBrokenSvg from '@ant-design/icons-svg/lib/asn/ActivityBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ActivityBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ActivityBroken: ActivityBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ActivityBrokenSvg}></AntdIcon>;
};

ActivityBroken.displayName = 'ActivityBroken';
ActivityBroken.inheritAttrs = false;
export default ActivityBroken;