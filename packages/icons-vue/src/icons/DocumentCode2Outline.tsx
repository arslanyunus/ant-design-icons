// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentCode2OutlineSvg from '@ant-design/icons-svg/lib/asn/DocumentCode2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentCode2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentCode2Outline: DocumentCode2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentCode2OutlineSvg}></AntdIcon>;
};

DocumentCode2Outline.displayName = 'DocumentCode2Outline';
DocumentCode2Outline.inheritAttrs = false;
export default DocumentCode2Outline;