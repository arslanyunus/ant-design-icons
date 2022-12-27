// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Group8LinearSvg from '@ant-design/icons-svg/lib/asn/Group8Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Group8LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Group8Linear: Group8LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Group8LinearSvg}></AntdIcon>;
};

Group8Linear.displayName = 'Group8Linear';
Group8Linear.inheritAttrs = false;
export default Group8Linear;