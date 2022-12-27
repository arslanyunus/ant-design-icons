// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CreativeCommonsBulkSvg from '@ant-design/icons-svg/lib/asn/CreativeCommonsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CreativeCommonsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CreativeCommonsBulk: CreativeCommonsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CreativeCommonsBulkSvg}></AntdIcon>;
};

CreativeCommonsBulk.displayName = 'CreativeCommonsBulk';
CreativeCommonsBulk.inheritAttrs = false;
export default CreativeCommonsBulk;