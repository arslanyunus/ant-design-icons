// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Group4LinearSvg from '@ant-design/icons-svg/lib/asn/Group4Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Group4LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Group4Linear: Group4LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Group4LinearSvg}></AntdIcon>;
};

Group4Linear.displayName = 'Group4Linear';
Group4Linear.inheritAttrs = false;
export default Group4Linear;