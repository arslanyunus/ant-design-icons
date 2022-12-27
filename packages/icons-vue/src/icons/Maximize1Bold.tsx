// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize1BoldSvg from '@ant-design/icons-svg/lib/asn/Maximize1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize1Bold: Maximize1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize1BoldSvg}></AntdIcon>;
};

Maximize1Bold.displayName = 'Maximize1Bold';
Maximize1Bold.inheritAttrs = false;
export default Maximize1Bold;