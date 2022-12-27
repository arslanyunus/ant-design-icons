// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Strongbox2BoldSvg from '@ant-design/icons-svg/lib/asn/Strongbox2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Strongbox2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Strongbox2Bold: Strongbox2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Strongbox2BoldSvg}></AntdIcon>;
};

Strongbox2Bold.displayName = 'Strongbox2Bold';
Strongbox2Bold.inheritAttrs = false;
export default Strongbox2Bold;