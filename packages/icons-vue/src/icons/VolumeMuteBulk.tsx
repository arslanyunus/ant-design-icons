// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import VolumeMuteBulkSvg from '@ant-design/icons-svg/lib/asn/VolumeMuteBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface VolumeMuteBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const VolumeMuteBulk: VolumeMuteBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VolumeMuteBulkSvg}></AntdIcon>;
};

VolumeMuteBulk.displayName = 'VolumeMuteBulk';
VolumeMuteBulk.inheritAttrs = false;
export default VolumeMuteBulk;