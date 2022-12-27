// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Group3LinearSvg from '@ant-design/icons-svg/lib/asn/Group3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Group3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Group3Linear: Group3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Group3LinearSvg}></AntdIcon>;
};

Group3Linear.displayName = 'Group3Linear';
Group3Linear.inheritAttrs = false;
export default Group3Linear;