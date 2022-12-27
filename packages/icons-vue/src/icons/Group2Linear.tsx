// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Group2LinearSvg from '@ant-design/icons-svg/lib/asn/Group2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Group2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Group2Linear: Group2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Group2LinearSvg}></AntdIcon>;
};

Group2Linear.displayName = 'Group2Linear';
Group2Linear.inheritAttrs = false;
export default Group2Linear;