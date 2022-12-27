// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize4OutlineSvg from '@ant-design/icons-svg/lib/asn/Maximize4Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize4OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize4Outline: Maximize4OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize4OutlineSvg}></AntdIcon>;
};

Maximize4Outline.displayName = 'Maximize4Outline';
Maximize4Outline.inheritAttrs = false;
export default Maximize4Outline;