// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Strongbox2BrokenSvg from '@ant-design/icons-svg/lib/asn/Strongbox2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Strongbox2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Strongbox2Broken: Strongbox2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Strongbox2BrokenSvg}></AntdIcon>;
};

Strongbox2Broken.displayName = 'Strongbox2Broken';
Strongbox2Broken.inheritAttrs = false;
export default Strongbox2Broken;