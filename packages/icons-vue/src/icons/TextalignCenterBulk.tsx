// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignCenterBulkSvg from '@ant-design/icons-svg/lib/asn/TextalignCenterBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignCenterBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignCenterBulk: TextalignCenterBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignCenterBulkSvg}></AntdIcon>;
};

TextalignCenterBulk.displayName = 'TextalignCenterBulk';
TextalignCenterBulk.inheritAttrs = false;
export default TextalignCenterBulk;