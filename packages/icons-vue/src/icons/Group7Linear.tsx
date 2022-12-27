// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Group7LinearSvg from '@ant-design/icons-svg/lib/asn/Group7Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Group7LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Group7Linear: Group7LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Group7LinearSvg}></AntdIcon>;
};

Group7Linear.displayName = 'Group7Linear';
Group7Linear.inheritAttrs = false;
export default Group7Linear;