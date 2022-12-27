// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GroupLinearSvg from '@ant-design/icons-svg/lib/asn/GroupLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GroupLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GroupLinear: GroupLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GroupLinearSvg}></AntdIcon>;
};

GroupLinear.displayName = 'GroupLinear';
GroupLinear.inheritAttrs = false;
export default GroupLinear;