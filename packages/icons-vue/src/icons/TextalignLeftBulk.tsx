// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TextalignLeftBulkSvg from '@ant-design/icons-svg/lib/asn/TextalignLeftBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TextalignLeftBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TextalignLeftBulk: TextalignLeftBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TextalignLeftBulkSvg}></AntdIcon>;
};

TextalignLeftBulk.displayName = 'TextalignLeftBulk';
TextalignLeftBulk.inheritAttrs = false;
export default TextalignLeftBulk;