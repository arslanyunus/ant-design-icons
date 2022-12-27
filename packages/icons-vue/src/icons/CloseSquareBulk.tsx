// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseSquareBulkSvg from '@ant-design/icons-svg/lib/asn/CloseSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseSquareBulk: CloseSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseSquareBulkSvg}></AntdIcon>;
};

CloseSquareBulk.displayName = 'CloseSquareBulk';
CloseSquareBulk.inheritAttrs = false;
export default CloseSquareBulk;