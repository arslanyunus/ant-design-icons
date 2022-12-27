// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Code1BoldSvg from '@ant-design/icons-svg/lib/asn/Code1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Code1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Code1Bold: Code1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Code1BoldSvg}></AntdIcon>;
};

Code1Bold.displayName = 'Code1Bold';
Code1Bold.inheritAttrs = false;
export default Code1Bold;