// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Code1OutlineSvg from '@ant-design/icons-svg/lib/asn/Code1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Code1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Code1Outline: Code1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Code1OutlineSvg}></AntdIcon>;
};

Code1Outline.displayName = 'Code1Outline';
Code1Outline.inheritAttrs = false;
export default Code1Outline;