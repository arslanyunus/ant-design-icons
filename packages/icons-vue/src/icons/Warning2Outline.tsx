// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Warning2OutlineSvg from '@ant-design/icons-svg/lib/asn/Warning2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Warning2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Warning2Outline: Warning2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Warning2OutlineSvg}></AntdIcon>;
};

Warning2Outline.displayName = 'Warning2Outline';
Warning2Outline.inheritAttrs = false;
export default Warning2Outline;