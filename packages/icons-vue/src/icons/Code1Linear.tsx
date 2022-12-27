// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Code1LinearSvg from '@ant-design/icons-svg/lib/asn/Code1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Code1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Code1Linear: Code1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Code1LinearSvg}></AntdIcon>;
};

Code1Linear.displayName = 'Code1Linear';
Code1Linear.inheritAttrs = false;
export default Code1Linear;