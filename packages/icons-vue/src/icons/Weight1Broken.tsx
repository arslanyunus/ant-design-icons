// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Weight1BrokenSvg from '@ant-design/icons-svg/lib/asn/Weight1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Weight1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Weight1Broken: Weight1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Weight1BrokenSvg}></AntdIcon>;
};

Weight1Broken.displayName = 'Weight1Broken';
Weight1Broken.inheritAttrs = false;
export default Weight1Broken;