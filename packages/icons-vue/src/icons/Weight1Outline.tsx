// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Weight1OutlineSvg from '@ant-design/icons-svg/lib/asn/Weight1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Weight1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Weight1Outline: Weight1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Weight1OutlineSvg}></AntdIcon>;
};

Weight1Outline.displayName = 'Weight1Outline';
Weight1Outline.inheritAttrs = false;
export default Weight1Outline;