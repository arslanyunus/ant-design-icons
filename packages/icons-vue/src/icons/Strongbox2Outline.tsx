// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Strongbox2OutlineSvg from '@ant-design/icons-svg/lib/asn/Strongbox2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Strongbox2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Strongbox2Outline: Strongbox2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Strongbox2OutlineSvg}></AntdIcon>;
};

Strongbox2Outline.displayName = 'Strongbox2Outline';
Strongbox2Outline.inheritAttrs = false;
export default Strongbox2Outline;