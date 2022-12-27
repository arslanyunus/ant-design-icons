// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WindBulkSvg from '@ant-design/icons-svg/lib/asn/WindBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WindBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WindBulk: WindBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WindBulkSvg}></AntdIcon>;
};

WindBulk.displayName = 'WindBulk';
WindBulk.inheritAttrs = false;
export default WindBulk;