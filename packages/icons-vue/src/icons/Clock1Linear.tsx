// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Clock1LinearSvg from '@ant-design/icons-svg/lib/asn/Clock1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Clock1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Clock1Linear: Clock1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Clock1LinearSvg}></AntdIcon>;
};

Clock1Linear.displayName = 'Clock1Linear';
Clock1Linear.inheritAttrs = false;
export default Clock1Linear;