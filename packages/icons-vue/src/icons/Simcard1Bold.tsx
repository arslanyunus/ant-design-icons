// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Simcard1BoldSvg from '@ant-design/icons-svg/lib/asn/Simcard1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Simcard1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Simcard1Bold: Simcard1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Simcard1BoldSvg}></AntdIcon>;
};

Simcard1Bold.displayName = 'Simcard1Bold';
Simcard1Bold.inheritAttrs = false;
export default Simcard1Bold;