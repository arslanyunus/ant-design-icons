// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ActivityOutlineSvg from '@ant-design/icons-svg/lib/asn/ActivityOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ActivityOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ActivityOutline: ActivityOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ActivityOutlineSvg}></AntdIcon>;
};

ActivityOutline.displayName = 'ActivityOutline';
ActivityOutline.inheritAttrs = false;
export default ActivityOutline;