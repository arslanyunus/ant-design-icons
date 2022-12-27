// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveTickLinearSvg from '@ant-design/icons-svg/lib/asn/ArchiveTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveTickLinear: ArchiveTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveTickLinearSvg}></AntdIcon>;
};

ArchiveTickLinear.displayName = 'ArchiveTickLinear';
ArchiveTickLinear.inheritAttrs = false;
export default ArchiveTickLinear;