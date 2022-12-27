// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Warning2LinearSvg from '@ant-design/icons-svg/lib/asn/Warning2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Warning2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Warning2Linear: Warning2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Warning2LinearSvg}></AntdIcon>;
};

Warning2Linear.displayName = 'Warning2Linear';
Warning2Linear.inheritAttrs = false;
export default Warning2Linear;