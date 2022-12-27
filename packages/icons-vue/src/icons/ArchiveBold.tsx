// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveBoldSvg from '@ant-design/icons-svg/lib/asn/ArchiveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveBold: ArchiveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveBoldSvg}></AntdIcon>;
};

ArchiveBold.displayName = 'ArchiveBold';
ArchiveBold.inheritAttrs = false;
export default ArchiveBold;