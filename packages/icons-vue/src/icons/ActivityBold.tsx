// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ActivityBoldSvg from '@ant-design/icons-svg/lib/asn/ActivityBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ActivityBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ActivityBold: ActivityBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ActivityBoldSvg}></AntdIcon>;
};

ActivityBold.displayName = 'ActivityBold';
ActivityBold.inheritAttrs = false;
export default ActivityBold;