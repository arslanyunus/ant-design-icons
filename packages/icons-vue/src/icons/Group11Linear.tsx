// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Group11LinearSvg from '@ant-design/icons-svg/lib/asn/Group11Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Group11LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Group11Linear: Group11LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Group11LinearSvg}></AntdIcon>;
};

Group11Linear.displayName = 'Group11Linear';
Group11Linear.inheritAttrs = false;
export default Group11Linear;