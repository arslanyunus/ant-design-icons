// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ActivityLinearSvg from '@ant-design/icons-svg/lib/asn/ActivityLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ActivityLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ActivityLinear: ActivityLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ActivityLinearSvg}></AntdIcon>;
};

ActivityLinear.displayName = 'ActivityLinear';
ActivityLinear.inheritAttrs = false;
export default ActivityLinear;