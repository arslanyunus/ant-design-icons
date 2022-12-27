// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveLinearSvg from '@ant-design/icons-svg/lib/asn/ArchiveLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveLinear: ArchiveLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveLinearSvg}></AntdIcon>;
};

ArchiveLinear.displayName = 'ArchiveLinear';
ArchiveLinear.inheritAttrs = false;
export default ArchiveLinear;