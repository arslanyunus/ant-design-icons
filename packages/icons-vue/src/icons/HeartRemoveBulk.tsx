// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/HeartRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartRemoveBulk: HeartRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartRemoveBulkSvg}></AntdIcon>;
};

HeartRemoveBulk.displayName = 'HeartRemoveBulk';
HeartRemoveBulk.inheritAttrs = false;
export default HeartRemoveBulk;