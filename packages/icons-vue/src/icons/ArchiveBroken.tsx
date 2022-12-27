// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveBrokenSvg from '@ant-design/icons-svg/lib/asn/ArchiveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveBroken: ArchiveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveBrokenSvg}></AntdIcon>;
};

ArchiveBroken.displayName = 'ArchiveBroken';
ArchiveBroken.inheritAttrs = false;
export default ArchiveBroken;