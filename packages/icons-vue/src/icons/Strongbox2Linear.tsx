// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Strongbox2LinearSvg from '@ant-design/icons-svg/lib/asn/Strongbox2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Strongbox2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Strongbox2Linear: Strongbox2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Strongbox2LinearSvg}></AntdIcon>;
};

Strongbox2Linear.displayName = 'Strongbox2Linear';
Strongbox2Linear.inheritAttrs = false;
export default Strongbox2Linear;