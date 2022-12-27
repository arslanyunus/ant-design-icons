// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Code1BrokenSvg from '@ant-design/icons-svg/lib/asn/Code1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Code1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Code1Broken: Code1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Code1BrokenSvg}></AntdIcon>;
};

Code1Broken.displayName = 'Code1Broken';
Code1Broken.inheritAttrs = false;
export default Code1Broken;