// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveMinusLinearSvg from '@ant-design/icons-svg/lib/asn/ArchiveMinusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveMinusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveMinusLinear: ArchiveMinusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveMinusLinearSvg}></AntdIcon>;
};

ArchiveMinusLinear.displayName = 'ArchiveMinusLinear';
ArchiveMinusLinear.inheritAttrs = false;
export default ArchiveMinusLinear;