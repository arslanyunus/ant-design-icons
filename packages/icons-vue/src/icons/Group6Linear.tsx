// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Group6LinearSvg from '@ant-design/icons-svg/lib/asn/Group6Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Group6LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Group6Linear: Group6LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Group6LinearSvg}></AntdIcon>;
};

Group6Linear.displayName = 'Group6Linear';
Group6Linear.inheritAttrs = false;
export default Group6Linear;