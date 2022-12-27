// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Gemini2BulkSvg from '@ant-design/icons-svg/lib/asn/Gemini2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Gemini2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Gemini2Bulk: Gemini2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Gemini2BulkSvg}></AntdIcon>;
};

Gemini2Bulk.displayName = 'Gemini2Bulk';
Gemini2Bulk.inheritAttrs = false;
export default Gemini2Bulk;