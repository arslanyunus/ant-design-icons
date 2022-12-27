// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Group10LinearSvg from '@ant-design/icons-svg/lib/asn/Group10Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Group10LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Group10Linear: Group10LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Group10LinearSvg}></AntdIcon>;
};

Group10Linear.displayName = 'Group10Linear';
Group10Linear.inheritAttrs = false;
export default Group10Linear;