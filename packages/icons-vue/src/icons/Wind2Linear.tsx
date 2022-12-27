// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Wind2LinearSvg from '@ant-design/icons-svg/lib/asn/Wind2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Wind2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Wind2Linear: Wind2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Wind2LinearSvg}></AntdIcon>;
};

Wind2Linear.displayName = 'Wind2Linear';
Wind2Linear.inheritAttrs = false;
export default Wind2Linear;