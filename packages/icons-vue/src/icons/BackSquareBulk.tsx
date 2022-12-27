// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackSquareBulkSvg from '@ant-design/icons-svg/lib/asn/BackSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackSquareBulk: BackSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackSquareBulkSvg}></AntdIcon>;
};

BackSquareBulk.displayName = 'BackSquareBulk';
BackSquareBulk.inheritAttrs = false;
export default BackSquareBulk;