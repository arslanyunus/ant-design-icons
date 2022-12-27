// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Group1LinearSvg from '@ant-design/icons-svg/lib/asn/Group1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Group1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Group1Linear: Group1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Group1LinearSvg}></AntdIcon>;
};

Group1Linear.displayName = 'Group1Linear';
Group1Linear.inheritAttrs = false;
export default Group1Linear;